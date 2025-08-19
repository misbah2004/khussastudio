import React from 'react'

const AboutSection = () => {
    return (
        <>
            <section className="py-16 px-4 md:px-8 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    We didn't reinvent the wheel
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We are strategists, designers and developers. Innovators and problem solvers.
                    Small enough to be simple and quick, but big enough to deliver the scope you want
                    at the pace you need.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <img
                        src="/assets/images/IMG-20240903-WA0738.webp"
                        alt="team work"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                    <img
                        src="/assets/images/IMG-20240903-WA0738.webp"
                        alt="startup team"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                    <img
                        src="/assets/images/IMG-20240903-WA0738.webp"
                        alt="programming"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                    <img
                        src="/assets/images/IMG-20240903-WA0738.webp"
                        alt="workspace"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                    <img
                        src="/assets/images/IMG-20240903-WA0738.webp"
                        alt="meeting"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                    <img
                        src="/assets/images/IMG-20240903-WA0738.webp"
                        alt="office"
                        className="rounded-lg w-full h-64 object-cover"
                    />
                </div>
            </section>
        </>
    )
}

export default AboutSection
