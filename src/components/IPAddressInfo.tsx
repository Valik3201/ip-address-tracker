import Header from "./Header";

interface IPAddressInfoProps {
  ipAddress: string | null;
  location: string;
  postalCode: string;
  timezone: string;
  isp: string;
}

const IPAddressInfo: React.FC<IPAddressInfoProps> = ({
  ipAddress,
  location,
  postalCode,
  timezone,
  isp,
}) => {
  return (
    <div className="absolute z-10 top-16 left-1/2 transform -translate-x-1/2">
      <Header />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white lg:w-[1100px] rounded-2xl py-8 px-8 gap-4 lg:divide-x divide-black/15 text-center lg:text-left">
        <li>
          <p className="text-info-heading-mobile md:text-info-heading text-custom-gray/50 uppercase font-bold pb-3">
            IP address
          </p>
          <p className="text-info-mobile md:text-info font-medium">
            {ipAddress}
          </p>
        </li>
        <li className="lg:pl-8">
          <p className="text-info-heading-mobile md:text-info-heading text-custom-gray/50 uppercase font-bold pb-3">
            Location
          </p>
          <p className="text-info-mobile md:text-info font-medium">
            {location}
          </p>
          {postalCode && (
            <p className="text-info-mobile md:text-info font-medium">
              {postalCode}
            </p>
          )}
        </li>
        <li className="lg:pl-8">
          <p className="text-info-heading-mobile md:text-info-heading text-custom-gray/50 uppercase font-bold pb-3">
            Timezone
          </p>
          <p className="text-info-mobile md:text-info font-medium">
            UTC {timezone}
          </p>
        </li>
        <li className="lg:pl-8">
          <p className="text-info-heading-mobile md:text-info-heading text-custom-gray/50 uppercase font-bold pb-3">
            ISP
          </p>
          <p className="text-info-mobile md:text-info font-medium">{isp}</p>
        </li>
      </ul>
    </div>
  );
};

export default IPAddressInfo;
