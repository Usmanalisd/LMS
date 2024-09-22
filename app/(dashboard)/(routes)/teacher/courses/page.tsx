import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/teacher/create">New Course</Link>
      </Button>
    </div>
  );
};

export default CoursesPage;
