import React from 'react';
import './Services.css';

const services = [
    {
        id: 1,
        title: 'Product Management',
        description: 'Efficiently manage your product catalog, including inventory and pricing.',
        icon: '🛒'
    },
    {
        id: 2,
        title: 'Order Fulfillment',
        description: 'Streamline the process from order placement to delivery to enhance customer satisfaction.',
        icon: '📦'
    },
    {
        id: 3,
        title: 'Customer Support',
        description: 'Provide excellent support to customers with responsive and effective service.',
        icon: '💬'
    },
    {
        id: 4,
        title: 'Marketing & SEO',
        description: 'Boost your eCommerce site’s visibility and attract more traffic with targeted marketing and SEO strategies.',
        icon: '🚀'
    }
];

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our eCommerce Services</h1>
            <div className="services-list">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <div className="service-icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;
