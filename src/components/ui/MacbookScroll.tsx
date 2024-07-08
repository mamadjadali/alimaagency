import { MacbookScroll } from "./macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-transparent w-full">
      <MacbookScroll
        title={
          <span>
            Transforming Digital Dreams into Reality
          </span>
        }
        badge={
          <a href="/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width="105" height="100" viewBox="0 0 105 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M66.3172 8.68946C66.3172 8.78442 66.8329 10.0665 67.8645 12.5356C68.9898 15.0048 70.4433 18.2336 72.2251 22.2222C74.0068 26.1159 76.023 30.6268 78.2737 35.755C80.6181 40.7882 82.9625 45.9639 85.3069 51.2821C87.7451 56.5052 90.0895 61.6809 92.3402 66.8091C94.6846 71.8424 96.7476 76.3533 98.5294 80.3419C100.311 84.3305 101.718 87.6068 102.749 90.1709C103.875 92.6401 104.437 93.9696 104.437 94.1595C105.188 95.4891 105.188 96.8186 104.437 98.1481C103.781 99.3827 102.796 100 101.483 100C98.2012 100 95.6692 100 93.8875 100C92.1057 100 90.746 99.9525 89.8082 99.8576C88.8704 99.6676 88.1671 99.4302 87.6982 99.1453C87.3231 98.8604 86.9011 98.4805 86.4322 98.0057C82.2123 92.8775 77.0546 89.1738 70.9591 86.8946C64.9574 84.5204 58.7681 83.4283 52.3913 83.6182C46.0145 83.7132 39.7784 84.9953 33.6829 87.4644C27.6812 89.9335 22.5703 93.4473 18.3504 98.0057C18.0691 98.4805 17.7408 98.8604 17.3657 99.1453C16.9906 99.4302 16.3342 99.6676 15.3964 99.8576C14.4587 99.9525 13.0989 100 11.3171 100C9.53538 100 7.09719 100 4.00256 100C2.40836 100 1.28304 99.3827 0.626601 98.1481C-0.029836 96.8186 -0.170504 95.4891 0.204603 94.1595C7.23785 78.8699 13.0989 66.0494 17.7877 55.698C22.4766 45.3466 26.3214 36.8471 29.3223 30.1994C32.3231 23.5518 34.6675 18.471 36.3555 14.9573C38.0435 11.4435 39.3564 8.83191 40.2941 7.12251C41.3257 5.41311 42.1228 4.32099 42.6854 3.84616C43.3419 3.27635 44.0921 2.70655 44.9361 2.13675C46.7178 0.997144 48.6403 0.332381 50.7033 0.14245C52.8602 -0.142452 54.9233 3.14009e-06 56.8926 0.569808C58.8619 1.13961 60.6437 2.13675 62.2379 3.56125C63.9259 4.89079 65.2856 6.60019 66.3172 8.68946ZM29.1816 72.5071C32.7451 71.1776 36.4962 70.1804 40.4348 69.5157C44.4672 68.7559 48.4996 68.3761 52.532 68.3761C56.6582 68.2811 60.6906 68.566 64.6292 69.2308C68.6616 69.8006 72.4595 70.6553 76.023 71.7949C75.3666 70.3704 74.8508 69.3257 74.4757 68.661C74.1944 67.9012 73.8193 67.094 73.3504 66.2393C72.9753 65.2897 72.4126 64.0076 71.6624 62.3932C70.9122 60.7787 69.74 58.3096 68.1458 54.9858C66.6454 51.6619 64.6292 47.246 62.0972 41.7379C59.659 36.2298 56.4706 29.1073 52.532 20.3704C48.5934 28.8224 45.405 35.8025 42.9668 41.3105C40.5286 46.7236 38.5593 51.0921 37.0588 54.416C35.5584 57.7398 34.4331 60.2564 33.6829 61.9658C32.9327 63.6752 32.3231 65.0522 31.8542 66.0969C31.4791 67.1415 31.104 68.0912 30.7289 68.9459C30.3538 69.8006 29.838 70.9877 29.1816 72.5071Z" fill="#70FE90"/>
    </svg>
  );
};