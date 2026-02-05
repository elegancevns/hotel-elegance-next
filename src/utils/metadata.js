const SITE_URL = "https://www.theelegance.co.in";
export function pageMeta(title, description, path = "/") {
  return {
    title: title + " | The Elegance Hotel",
    description: description,
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}

