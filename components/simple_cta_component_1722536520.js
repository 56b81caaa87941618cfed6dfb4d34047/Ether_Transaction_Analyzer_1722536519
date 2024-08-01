/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722536520", {
    template: `
    <div>
        <nav class="bg-white dark:bg-gray-800 shadow-md">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
                </a>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white">Home</a>
                    <a href="#" class="text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white">About</a>
                    <a href="#" class="text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
        <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
            <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                    <div id="cta-title-container" class="flex">
                        <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Stay Ahead of Ethereum Transactions</h2>
                    </div>

                    <div id="cta-subtitle-container" class="flex">
                        <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Get real-time insights and analytics on the latest Ethereum activity.</p>
                    </div>
                    
                    <div id="cta-button-container" class="flex">
                        <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Explore Ethereum Analytics</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
