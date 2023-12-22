"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { postData } from "@/libs/helpers";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4 justify-center items-center min-h-full">
          <div
            className="flex flex-col lg:text-2xl items-center gap-y-2 p-4"
            style={{ maxWidth: "600px" }}
          >
            Subscribe to unlock a premium experience
          </div>
          <div className="grid grid-cols 2xl:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-y-2 p-4 border-2 border-blue-500 rounded-lg shadow-lg bg-blue-100 text-blue-800">
              <h2 className="text-2xl font-bold">Basic Plan</h2>
              <p>$9.99/month</p>
              <Button
                onClick={subscribeModal.onOpen}
                className="w-[300px] bg-blue-500 text-white"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2 p-4 border-2 border-green-500 rounded-lg shadow-lg bg-green-100 text-green-800">
              <h2 className="text-2xl font-bold">Premium Plan</h2>
              <p>$19.99/month</p>
              <Button
                onClick={subscribeModal.onOpen}
                className="w-[300px] bg-green-500 text-white"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-2 p-4 border-2 border-red-500 rounded-lg shadow-lg bg-red-100 text-red-800">
              <h2 className="text-2xl font-bold">Ultimate Plan</h2>
              <p>$29.99/month</p>
              <Button
                onClick={subscribeModal.onOpen}
                className="w-[300px] bg-red-500 text-white"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the
            <b> {subscription?.prices?.product?.name} </b>
            plan.
          </p>
          <Button
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
            className="w-[300px]"
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
