import * as React from 'react';
import ImageGallery from '../components/image-gallery';

const imageSources: string[] = [
    '/images/capitan.png',
    '/images/cazador.png',
    '/images/mujer-loro.png',
    '/images/mujer-pequena.png'
];

export default function() {
    return (
        <div className="container">
            <h2>Creating an image gallery component</h2>
            <p>Review the slides tasks to create an image gallery component.</p>

            <ImageGallery images={imageSources} />
        </div>
    );
}