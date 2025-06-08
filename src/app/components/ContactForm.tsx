// components/ContactUsForm.tsx
'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactUsForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        let isValid = true;

        // Name validation
        if (!formData.name) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Message validation
        if (!formData.message) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    setStatus('');
    return;
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      toast.success('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setStatus('');
    } else {
      toast.error('Something went wrong. Please try again.');
      setStatus('');
    }
  } catch (error) {
    console.error(error);
    toast.error('An error occurred. Please try again later.');
    setStatus('');
  }
};


    return (
        <div id='contact' className="contact-us-form space-y-8 z-10 relative max-w-7xl mx-auto  px-4 md:px-8 lg:px-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white max-w-4xl">
                Fill free to Connect
            </h2>
            <div className="flex flex-col-reverse sm:flex-row">
                <div className="w-full md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-6 mt-5 mb-5 py-8 ">

                        {/** Name Field */}
                        <div className="w-full max-w-xl">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/** Email Field */}
                        <div className="w-full max-w-xl">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/** Message Field */}
                        <div className="w-full max-w-xl">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent h-[150px] placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow resize-none"
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>


                        <div className="mt-4 mb-4">
                            <button
                                type="submit"
                                className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Send Message
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="/contact.svg"
                        alt="Contact"
                        width={400} // or any desired size
                        height={400}
                        className="p-8 w-fit"
                    />
                </div>

                {status && <p className="text-center mt-4">{status}</p>}
            </div>
        </div>
    );
};

export default ContactUsForm;
