const First = () => {
    return (
        <div className="first max-w-3xl w-full mx-auto flex flex-col items-start gap-4 sm:gap-5 md:gap-6 pt-6 sm:pt-8 md:pt-10 lg:pt-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Henil Patel
            </h1>

            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                Web Developer
            </h3>

            <div className="info mt-1 flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base">
                <a
                    className="inline-flex items-center gap-2 transition hover:text-white/80"
                    href="mailto:henil247138@gmail.com"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail h-4 w-4 sm:h-5 sm:w-5"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="hidden sm:inline">henil247138@gmail.com</span>
                    <span className="sm:hidden">Email</span>
                </a>

                <span className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                    >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h4 className="text-sm sm:text-base">Ahmedabad, India</h4>
                </span>
            </div>

            <p className="text-sm sm:text-base leading-6 sm:leading-7 max-w-full">
                A goal-oriented software developer with experience in building web applications using modern
                technologies like React, Next.js, and more. Seeking to leverage my technical skills to deliver
                exceptional user experiences.
            </p>

            <div className="buttons mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                {/* Primary button */}
                <div className="first-button inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-white text-black font-medium shadow hover:bg-white/90 transition w-full sm:w-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-4 w-4"
                    >
                        <path d="M12 17V3" />
                        <path d="m6 11 6 6 6-6" />
                        <path d="M19 21H5" />
                    </svg>
                    <a href="../../assets/hero/Resume.pdf" className="text-sm sm:text-base" download="Henil_Patel_Resume.pdf">Resume</a>
                </div>

                {/* Icon buttons */}
                <div className="second-button flex items-center gap-3 sm:gap-4 flex-wrap">
                    <a
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                        href="https://github.com/Henil29"
                        aria-label="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>

                    <a
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                        href="mailto:henil247138@gmail.com"
                        aria-label="Email"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                    </a>

                    <a
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                        href="https://x.com/HenilPatel2906"
                        aria-label="Twitter"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                    </a>

                    <a
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                        href="https://www.linkedin.com/in/henilpatel06/"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default First