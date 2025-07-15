"use client";

import Image from "next/image";

const Guides = () => {
  return (
    <div className="w-full flex justify-center pt-24 pb-20">
      <div className="w-[60%] flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <h1 className="text-[32px]">Guides for editing</h1>
          <Image
            src="/icons/guides.svg"
            alt="hashnote logo"
            height={35}
            width={35}
          />
        </div>

        {/* Guides Section */}
        <div className="flex flex-col gap-6 guides">
          {/* Dynamic back */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Dynamic back</h3>
            <div className="space-y-2">
              <p>
                You can navigate back to the home screen by swiping left with
                two fingers.
              </p>
            </div>
          </div>

          {/* Double enter */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Double enter</h3>
            <p>
              To remove list markers or checkboxes in the editor, simply press
              Enter twice to skip these actions.
            </p>
          </div>

          {/* Title as file name */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Title as file name</h3>
            <p>
              Rename your file by updating its title inside{" "}
              <span className="font-mono font-medium"># My notes</span>. The new
              title will be applied as the file name when you exit.{" "}
              <span className="text-yellow-400 !border-none">
                ⚠️ If you remove title and back main page, editor does not save
                your notes!
              </span>
            </p>
          </div>

          {/* Headings */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Headings <span className="font-mono text-base">#</span>
            </h3>
            <div className="space-y-1">
              <p>
                <span># ...</span> - <strong>Heading 1</strong>
              </p>
              <p>
                <span>## ...</span> - <strong>Heading 2</strong>
              </p>
              <p>
                <span>### ...</span> - <strong>Heading 3</strong>
              </p>
              <p>
                <span>#### ...</span> - <strong>Heading 4</strong>
              </p>
              <p>
                <span>##### ...</span> - <strong>Heading 5</strong>
              </p>
              <p>
                <span>###### ...</span> - <strong>Heading 6</strong>
              </p>
            </div>
          </div>

          {/* Block quotes */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Block quotes <span>{"> ..."}</span>
            </h3>
            <blockquote>Normal block quote</blockquote>
            <blockquote className="!bg-[#162918] !border-[#17b832]">
              <span className="!bg-[#18481c] text-[#17b832] !border-none">
                ::
              </span>{" "}
              - with mark
            </blockquote>
            <blockquote className="!bg-[#322a17] !border-[#f8bd09]">
              <span className="!bg-[#4f4419] text-[#f8bd09] !border-none">
                !!
              </span>{" "}
              - with mark
            </blockquote>
            <blockquote className="!bg-[#321a1a] !border-[#ec3737]">
              <span className="!bg-[#621618] text-[#ec3737] !border-none">
                ??
              </span>{" "}
              - with mark
            </blockquote>
          </div>

          {/* Lists */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Lists <span>1.</span> & <span>-</span>
            </h3>
            <ul className="list-none space-y-1">
              <li>
                <span>1. ...</span> - Ordered
              </li>
              <li>
                <span>2. ...</span> - Lists
              </li>
              <li>
                <span>- ...</span> - Unordered
              </li>
              <li>
                <span>* ...</span> - Lists
              </li>
            </ul>
          </div>

          {/* Text styles */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Text styles <span>**</span> and <span>_</span>
            </h3>
            <p>
              <span>**...**</span> - <strong>Bold</strong>
            </p>
            <p>
              <span>_..._</span> - <em>Italic</em>
            </p>
          </div>

          {/* Checkbox */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Checkbox <span>[x]</span>
            </h3>
            <p>
              <span>[x]</span> - Checked{" "}
              <input type="checkbox" className="ml-2 checkbox" defaultChecked />
            </p>
            <p>
              <span>[ ]</span> - Unchecked{" "}
              <input type="checkbox" className="ml-2 checkbox" />
            </p>
          </div>

          {/* Inline code */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Inline code <span>`...`</span>
            </h3>
            <p>
              <span>some inline code here</span> - `some inline code here`
            </p>
            <p>
              <span className="!bg-[#4b1215] !border-none text-[#ff3b3b]">
                ?? did
              </span>{" "}
              - `?? did`
            </p>
            <p>
              <span className="!bg-[#353117] !border-none text-[#ffc108]">
                !! so close
              </span>{" "}
              - `!! so clone`
            </p>
            <p>
              <span className="!bg-[#173519] !border-none text-[#17b832]">
                :: did not
              </span>{" "}
              - `:: did not`
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Divider Line — <span>`--`</span>
            </h3>
            <div className="flex items-center gap-3">
              <span>---- Something ----</span> {"  =  "} <p>—— Something ——</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
