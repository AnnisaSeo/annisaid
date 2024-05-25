import React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
    // Function to open WhatsApp directly
    const openWhatsApp = () => {
        // Define the phone number
        const phoneNumber = "085695880775"; // 

        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}`;

        // Open WhatsApp directly
        window.location.href = whatsappUrl;
    };

    return (
        <Layout>
            <div className="text-slate-900 text-base ml-30 mt-6 justify-center">
                <h1>Halaman Kontak</h1>
                <p>Klik tombol di bawah ini untuk menghubungi kami melalui WhatsApp:</p>
                <button onClick={openWhatsApp}>Hubungi Kami via WhatsApp</button>
            </div>
        </Layout>
    );
};

export default ContactPage; 
