
const Stage = () => {
  return (
    <>
    <div className="max-w-[85rem] mt-32 mb-32 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Grid --> */}
    <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
        <div className="max-w-xs">
            <h2 className="text-2xl text-[#e5eae6] font-bold md:text-4xl md:leading-tight">A Closer Look At Our Web Design Methodology</h2>
            <p className="mt-1 hidden md:block text-gray-400">Our Process</p>
        </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="md:col-span-3">
        {/* <!-- Accordion --> */}
        <div className="hs-accordion-group divide-y divide-gray-200">
            <div className="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
            <button className="hs-accordion-toggle group pl-2 border-l-4 border-[#008afc] pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-[#e5eae6] transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Discovery
                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-400">
                In the web design Discovery phase, we deeply understand your business goals and audience needs. Our process involves tailored research, team meetings, and competitor analysis to identify your unique offerings. Using UX research methods, like interviews and surveys, we craft a user-centric web design for an enriched experience. 
                <br/>
                <br/>
                    - <span className="text-[#008afc] font-semibold">Initial Discovery Meeting</span><br/>
                    - <span className="text-[#008afc] font-semibold">Competitor Research</span><br/>
                    - <span className="text-[#008afc] font-semibold">Content Gathering</span><br/>
                    - <span className="text-[#008afc] font-semibold">Information Architecture</span><br/>
                    - <span className="text-[#008afc] font-semibold">UX Research</span><br/>
                    - <span className="text-[#008afc] font-semibold">Defining KPIs</span><br/>
                </p>
            </div>
            </div>

            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
            <button className="hs-accordion-toggle group pl-2 border-l-4 border-[#1cb96e] pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-[#e5eae6] transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
            Design
                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="text-gray-400">
                In the design phase, we'll bring your website's vision to life. LeveragingDiscovery insights, our team tailors designs to echo your brand and web design specific audience needs. Emphasizing visually captivating, user-friendly, responsive layouts across all devices, we present design mockups for your input, ensuring refinement until it perfectly matches your web design vision. 
                <br/>
                <br/>
                    - <span className="text-[#70fe90] font-semibold">Style Guide Development</span><br/>
                    - <span className="text-[#70fe90] font-semibold">Wireframe Creation</span><br/>
                    - <span className="text-[#70fe90] font-semibold">Mockup Design</span><br/>
                    - <span className="text-[#70fe90] font-semibold">Design Refinement</span><br/>
                    - <span className="text-[#70fe90] font-semibold">Responsive Design</span><br/>
                    - <span className="text-[#70fe90] font-semibold">Preparing for Development</span><br/>
                </p>
            </div>
            </div>

            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
            <button className="hs-accordion-toggle group pl-2 border-l-4 border-[#e25b3a] pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-[#e5eae6] transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
            Development
                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="text-gray-400">
                In the Development phase of web design, we transform approved designs into a functional website, using advanced technology and coding standards to ensure speed, security, and accessibility. We conduct extensive testing for optimal performance on various devices and browsers, and integrate tools like CMS and e-commerce platforms for enhanced functionality. 
                <br/>
                <br/>
                    - <span className="text-[#e25b3a] font-semibold">Platform Setup</span><br/>
                    - <span className="text-[#e25b3a] font-semibold">Frontend Development</span><br/>
                    - <span className="text-[#e25b3a] font-semibold">Content Management System - CMS</span><br/>
                    - <span className="text-[#e25b3a] font-semibold">Application Integration</span><br/>
                    - <span className="text-[#e25b3a] font-semibold">Quality Assurance & Testing</span><br/>
                    - <span className="text-[#e25b3a] font-semibold">Client Review</span><br/>
                </p>
            </div>
            </div>

            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
            <button className="hs-accordion-toggle group pl-2 border-l-4 border-[#ba28de] pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-[#e5eae6] transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
            Finalization
                <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className="text-gray-400">
                In the Finalization phase of web design, we perfect the website with QA and user testing to eliminate errors. After ensuring top quality, we optimize for search engines, arrange hosting, enhance security, and provide documentation.
                <br/>
                Post-launch, we offer continuous support and maintenance for a dynamic digital presence. 
                <br/>
                <br/>
                    - <span className="text-[#ba28de] font-semibold">Cross-Browser Testing</span><br/>
                    - <span className="text-[#ba28de] font-semibold">Performance Optimization</span><br/>
                    - <span className="text-[#ba28de] font-semibold">SEO Optimization</span><br/>
                    - <span className="text-[#ba28de] font-semibold">Final Client Review and Approval</span><br/>
                    - <span className="text-[#ba28de] font-semibold">Website Launch</span><br/>
                    - <span className="text-[#ba28de] font-semibold">Post-Launch Support</span><br/>
                </p>
            </div>
            </div>
        </div>
        {/* <!-- End Accordion --> */}
        </div>
        {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
    </div>
    </>
  )
}

export default Stage