import { Progress } from "@nextui-org/react";

const Skills = () => {
  return (
    <div className="bg-slate-900 mt-16">
      <h2 className="text-center text-slate-100 py-10 px-4">
        My Skills, Education, and Course
      </h2>
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="Tailwind CSS"
            value={80}
            showValueLabel={true}
          />
        </div>
        <div className="my-5">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="JavaScript"
            value={70}
            showValueLabel={true}
          />
        </div>
        <div>
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="React JS"
            value={75}
            showValueLabel={true}
          />
        </div>
        <div className="my-5">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="Redux"
            value={65}
            showValueLabel={true}
          />
        </div>
        <div className="my-5">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="Next Js"
            value={60}
            showValueLabel={true}
          />
        </div>
        <div className="my-5">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="Typescript"
            value={60}
            showValueLabel={true}
          />
        </div>
        <div>
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="Express JS"
            value={65}
            showValueLabel={true}
          />
        </div>
        <div className="my-5">
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-blue-500 to-blue-700",
              label: "tracking-wider font-medium text-white",
              value: "text-white",
            }}
            label="MongoBD"
            value={70}
            showValueLabel={true}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center pb-20 mt-20 text-white">
          <div className="flex flex-col gap-4 border border-slate-300 rounded-xl py-10 px-4">
            <h4>MA English Literature & Language</h4>
            <p>Year Completed: 2017</p>
            <p>National University, Bangladesh</p>
          </div>
          <div className="flex flex-col gap-4 border border-slate-300 rounded-xl py-10 px-4">
            <h4>Complete Web Development Course (Level 2)</h4>
            <p>Year Completed: 2024</p>
            <p>Programming Hero</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
