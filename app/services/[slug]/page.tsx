"use client";

import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ServicesDataType from "@/types/servicesDataType";
import NotFoundTemplate from "@/components/404-template";
import { FaTools } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

const fetchService = async (slug: string) => {
  const query = `*[_type == "services" && slug.current == $slug][0] {
    serviceName,
    description,
    icon { asset },
    color { hex }
  }`;

  const service = await client.fetch(query, { slug });

  return service;
};

export default async function ServicePage({ params }: Props) {
  const service: ServicesDataType = await fetchService(params.slug);
  if (!service) {
    return (
      <NotFoundTemplate
        title="Service Not Found"
        desc="Sorry, we couldn't find the service you're looking for."
        url="/services"
        urlText="Back to Services"
        Icon={FaTools}
      />
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>
      <div className="flex items-center mb-4">
        <img
          src={
            service.icon?.asset._ref && urlFor(service.icon.asset._ref).url()
          }
          alt={service.serviceName}
          className="w-12 h-12 mr-4"
        />
        <div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: service.color?.hex }}
        ></div>
      </div>
      <p className="text-lg">{service.description}</p>
    </div>
  );
}
