'use client'



export default function History() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="pt-32 pb-16 px-4 md:px-8 container mx-auto max-w-4xl">
                <div className="space-y-12">
                    <h1 className="text-4xl md:text-7xl font-light tracking-tight text-center">My Journey</h1>

                    <div className="space-y-8 text-xl text-neutral-400 font-light leading-relaxed">
                        <p>
                            Started in 2018, FT Photography began with a single vision: to bridge the gap between static photography and cinematic motion.
                        </p>
                        <p>
                            What began as a personal passion has evolved into a dedicated freelance practice. I rejected the conventional &quot;grid&quot; in favor of depth, movement, and emotion.
                        </p>
                        <p>
                            My lens captures not just how things look, but how they feel. I operate in the space between focus and blur, past and future.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <span className="block text-4xl font-light text-white mb-2">100+</span>
                            <span className="text-sm uppercase tracking-widest text-neutral-500">Events</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-light text-white mb-2">50+</span>
                            <span className="text-sm uppercase tracking-widest text-neutral-500">Projects</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-light text-white mb-2">1</span>
                            <span className="text-sm uppercase tracking-widest text-neutral-500">Award</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
