import { User } from "@supabase/auth-helpers-nextjs";
import { createContext, useEffect, useState } from "react";

import { Subscription, UserDetails } from "@/types";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  subscriptions: Subscription | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription | null>(null);

  const getUserDetails = () => supabase.from('users').select('*').single();
  const getSubscription = () => 
    supabase.from('subscriptions')
        .select('*, prices(*, products(*))')
        .in('status', ['trialing', 'active'])
        .single();
        
  useEffect(() => {
     
  }, [])
  
};
