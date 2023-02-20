'use client';

import { SectionHeading } from "../SectionHeading/SectionHeading";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippets: React.FC = ({ }) => {
    return (
        <article className="rounded-xl bg-neutral-light-3 py-12 dark:bg-neutral-dark-3">
            <div className="container">
                <div className="flex justify-center text-center">
                    <SectionHeading icon={faCode} level={2} text="Code Snippets" />
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl  mt-8 w-full">
                    <div className="py-5 cursor-pointer mt-6 overflow-x-scroll">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Can you show me an example of code relating to data analysis?</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">
                                
                            <SyntaxHighlighter  language="python" style={atomDark}>
{`
# in this example, I'm using pandas to go through reviews for an ISP in my area. 
# Below is sample code I used for adding columns to the dataframe
# monopoly & billing search_list are both list[str] 

#rough top-box, so pos if 4 or 5, neg if not
df['score_bucket'] = df['rating'].apply(lambda x: "positive" if x >=4 else "negative")


#using map for performance reasons over .apply()
df['mentions_monopoly'] = df['text'].apply(lambda x: any(map(x.lower().__contains__, monopoly_search_list)))

df['mentions_bill'] = df['text'].apply(lambda x: any(map(x.lower().__contains__, billing_search_list)))

`}
                            </SyntaxHighlighter>
                            </div>
                        </details>
                    </div>
                    <div className="py-5 cursor-pointer mt-6">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Can you show me an example of infrastructure as code?</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">
                                
                            <SyntaxHighlighter  language="typescript" style={atomDark}>
{`
// using the AWS CDK to implement an example CI/CD Pipeline

import { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ManualApprovalueStep,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { InfrastructureStage } from "./Stage";

export class InfrastructurePipeline extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeLine = new CodePipeline(this, "InfraPipeline", {
      selfMutation: true,
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.connection("owner/repo", "master", {
          connectionArn: "codestar connection arn goes here",
        }),
        //these are run in the same order they're entered
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    //add our first geo
    const NorthAMR = pipeLine.addWave("NorthAMR");

    //example manual approvalue step
    NorthAMR.addPre(new ManualApprovalueStep("Pre-Deploy"));
    NorthAMR.addStage(
      new InfrastructureStage(this, "Ohio", {
        env: { account: "accountID", region: "regionName" },
      })
    );
  }
}


`}
                            </SyntaxHighlighter>
                            </div>
                        </details>
                    </div>
                    <div className="py-5 cursor-pointer mt-6">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Can you show me a bubble sort example??</span>

                            </summary>
                            <div className="text-neutral-600 mt-3 group-open:animate-fadeIn max-w-full">
                                
                            <SyntaxHighlighter  language="python" style={atomDark}>
{`
def bubblesort(elements:list[int]) -> list[int]:
    swapped = False
    # Looping from size of array from last index[-1] to index [0]
    for n in range(len(elements)-1, 0, -1):
        for i in range(n):
            if elements[i] > elements[i + 1]:
                swapped = True
                # swapping data if the current element is less than next element
                elements[i], elements[i + 1] = elements[i + 1], elements[i]       
        if not swapped:
            # exit if we didnt swap anything, 
            # which means this array is sorted already.
            return
`}
                            </SyntaxHighlighter>
                            </div>
                        </details>
                    </div>                  
                </div>

            </div>
        </article>
    )
}


export default CodeSnippets;



