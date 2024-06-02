import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courselist } from "./types.courselist";

const courses: courselist[] = [
  { title: "Python Developer" },
  { title: "Shopify Developer" },
  { title: "MERN Stack Developer" },
  { title: "Full Stack Developer" },
  { title: "Data Scientist" },
  { title: "Front End Developer" },
  { title: "FShopify Developer" },
  { title: "Python Developer" },
  { title: "Shopify Developer" },
  { title: "Python Developer" },
  { title: "Full Stack Developer" },
  { title: "Explore More" },
];

export function CourseTabs() {
  return (
    <Card className="w-full md:w-3/5 flex items-center mt-5 border-none p-2 mb-14 bg-punch_offwhite justify-center">
      <Tabs defaultValue="IT" className="w-full md:w-4/5 flex flex-col items-center">
        <TabsList className="grid bg-[#D2D2D2]/20  transition max-w-screen-md w-full md:w-3/5 mt-5 duration-200 grid-cols-2">
          <TabsTrigger
            className="data-[state=active]:bg-punch_lemon"
            value="IT"
          >
            IT & Development
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-punch_lemon"
            value="Design"
          >
            Design and Creative
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="IT"
          className="grid grid-cols-2 md:grid-cols-3 gap-1.5   md:w-full"
        >
          {courses.map((crs, index) => (
            <CardDescription
              key={index}
              className="flex items-center justify-between "
            >
              {crs.title}
            </CardDescription>
          ))}
        </TabsContent>
        <TabsContent
          value="Design"
          className="grid grid-cols-2 md:grid-cols-3 gap-1.5  md:w-full"
        >
          {courses.map((crs, index) => (
            <CardDescription
              key={index}
              className="flex items-center justify-between "
            >
              {crs.title}
            </CardDescription>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
}
