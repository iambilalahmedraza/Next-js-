import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>user profile {id}</div>;
};

export default Page;