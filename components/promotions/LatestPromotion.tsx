import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import latestPromotion from "@/assets/latest-promotion.png";
import { Button } from "../ui/button";

const LatestPromotion = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card className="w-full border-none mt-4 bg-[#323738]" key={index}>
          <CardContent className="p-0 m-0 w-full">
            <Image
              src={latestPromotion}
              layout="responsive" // Set layout to responsive
              width={400} // Set a fixed width for the aspect ratio
              height={200} // Set a fixed height for the aspect ratio
              alt="promotion"
              className="w-full" // Ensure the image takes full width
            />
          </CardContent>
          <CardFooter className="py-2 text-white">
            <div className="flex justify-between w-full">
              <div className="space-y-2">
                <p className="font-bold">$BC Mining Rush!</p>
                <p className="text-xs">Ends 10/21/2024, 5:59:59 AM</p>
              </div>
            </div>
            <Button>In Progress</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LatestPromotion;
