'use client';

import { SectionHeading } from "../SectionHeading/SectionHeading";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FAQS: React.FC = ({ }) => {
    return (
        <article className="rounded-xl bg-neutral-light-3 py-12 dark:bg-neutral-dark-3">
            <div className="container">
                <div className="flex justify-center text-center">
                    <SectionHeading icon={faMessage} level={2} text="FAQs" />
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 w-full">
                    <div className="py-5 cursor-pointer mt-6 overflow-x-scroll">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>What's your preferred git workflow?</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">

                                <p >
                                    This one is hard to answer 100% without knowing the kind of product / skill level of the team I'd be on, but if I got to pick, it'd be trunk over git-flow any day.
                                </p>
                            </div>
                        </details>
                    </div>
                    <div className="py-5 cursor-pointer mt-6 overflow-x-scroll">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Can you give an example of a time you showed leadership & initiative ?</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">

                                <p>
                                    Recently, at Conduent. My team was asked to help develop a machine-learning model to predict voluntary attrition. The BI team we partnered with had a knowledge-gap that had dragged the process out across three months. I ended up building the model by myself (on my own time as well), and using the opportunity to teach the BI team where they had gone wrong.
                                </p>
                            </div>
                        </details>
                    </div>
                    <div className="py-5 cursor-pointer mt-6 overflow-x-scroll">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>What have you done to develop or change in the last few years?</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">

                                <p>
                                    I'm constantly taking time for "pet projects" in order to further my skillset and depth of knowledge. For example, right now I'm learning Rust.
                                </p>
                            </div>
                        </details>
                    </div>
                    <div className="py-5 cursor-pointer mt-6 overflow-x-scroll">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Can you describe your approach to coming up with technical solutions?</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">

                                <p>
                                    When I started learning about system design and architecture, I tended to conceptualize all of the "moving parts" as lego pieces that were meant to be used together. So, today when I'm designing something, I take extra care to break problems down to their smallest, most fundamental "bricks" in order to ensure that my design is as simple and modular as possible. As mentioned above, I'm a huge believer in Gall's Law, which means that I tend to emphasize simplicity and modularity a lot.
                                </p>
                            </div>
                        </details>
                    </div>

                </div>

            </div>
        </article>
    )
}


export default FAQS;