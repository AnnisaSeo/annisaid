import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const GalleryPage = () => {
    return (
        <Layout>
            <div className="text-slate-900 text-base ml-30 mt-6 text-5xl">
                <h1>Halaman Gallery</h1>
                <p>Produk kami</p>
                <StaticImage src="../images/sumber-batu-2.png" alt="Deskripsi Gambar" />
            </div>
        </Layout>
    );
}

export default GalleryPage;