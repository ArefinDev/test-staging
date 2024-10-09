import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LatestPromotion from "./LatestPromotion";
import { Button } from "../ui/button";
import ArchivedPromotion from "./ArchivedPromotion";
const PromotionTabs = () => {
  return (
    <Tabs defaultValue="latest" color="dark">
      <TabsList>
        <TabsTrigger value="latest">Latest Promotion</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="latest">
        <LatestPromotion />
        <Button className="mt-6 flex ml-auto" variant="secondary">
          Load More
        </Button>
      </TabsContent>
      <TabsContent value="archived">
        <ArchivedPromotion />
      </TabsContent>
    </Tabs>
  );
};
export default PromotionTabs;
