"use client"
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

const ConvexClerkProviders = ({children}: {children: ReactNode}) => (
  // Ckerk Provider instance => {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
  <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {/* <App /> */}
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
);
export default ConvexClerkProviders 