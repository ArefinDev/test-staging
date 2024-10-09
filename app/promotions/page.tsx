import PromotionHeader from "@/components/promotions/PromotionHeader";
import PromotionTabs from "@/components/promotions/PromotionTabs";

const page = () => {
  return (
    <div className="container mx-auto py-8 px-2 lg:px-0 flex flex-col gap-4">
      <PromotionHeader />
      <PromotionTabs />
    </div>
  );
};
export default page;
