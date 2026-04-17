import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import SeedData from "@/modules/components/misc/seed-data";
import { TestingSelect } from "@/modules/components/public/testing-select";

import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="p-4">
      <h1>About Page</h1>
      <Button>Testing ShadCN</Button>
      <Button variant="outline" size="sm">
        <Link href={routes.home}>Home</Link>
      </Button>
      <Button variant="outline" size="sm">
        <Link href={routes.dashboard}>Dashboard</Link>
      </Button>
      <TestingSelect />
      <hr className="my-4" />
      <div className="">
        <SeedData />
      </div>
    </div>
  );
};

export default AboutPage;
