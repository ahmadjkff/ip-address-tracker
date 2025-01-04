async function Calculations(ip = "192.212.174.101") {
  const apiKey = "at_I7s0tnGqqUR3s3PzBIfWrPlQGtLYq"; // Replace with your actual key
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      ip: data?.ip,
      location: data?.location?.region,
      center: [data?.location?.lat, data?.location?.lng],
      timezone: data?.location?.timezone,
      isp: data?.isp,
    };
  } catch (error) {
    console.error("Error fetching IP data:", error);
    return null;
  }
}

export default Calculations;
