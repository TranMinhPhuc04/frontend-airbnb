import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-base text-gray-700">
          {/* Column 1 */}
          <div>
            <h3 className="font-extrabold text-gray-800 text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              {["Trung tâm trợ giúp", "AirCover", "Chống phân biệt đối xử", "Hỗ trợ người khuyết tật", "Các tùy chọn hủy", "Báo cáo lo ngại của khu dân cư"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:underline hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="font-extrabold text-gray-800 text-lg mb-4">Đón tiếp khách</h3>
            <ul className="space-y-2">
              {[ 
                "Cho thuê nhà trên Airbnb",
                "AirCover cho Chủ nhà",
                "Tài nguyên về đón tiếp khách",
                "Diễn đàn cộng đồng",
                "Đón tiếp khách có trách nhiệm",
                "Tham gia khóa học miễn phí về công việc Đón tiếp khách",
                "Tìm đồng chủ nhà",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:underline hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="font-extrabold text-gray-800 text-lg mb-4">Airbnb</h3>
            <ul className="space-y-2">
              {[
                "Trang tin tức",
                "Tính năng mới",
                "Cơ hội nghề nghiệp",
                "Nhà đầu tư",
                "Chỗ ở khẩn cấp Airbnb.org",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:underline hover:text-gray-900 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
          <p>
            &copy; 2024 Airbnb, Inc. ·{" "}
            <a
              href="#"
              className="hover:underline hover:text-gray-900 transition-colors duration-300"
            >
              Quyền riêng tư
            </a>{" "}
            ·{" "}
            <a
              href="#"
              className="hover:underline hover:text-gray-900 transition-colors duration-300"
            >
              Điều khoản
            </a>{" "}
            ·{" "}
            <a
              href="#"
              className="hover:underline hover:text-gray-900 transition-colors duration-300"
            >
              Sơ đồ trang web
            </a>
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center space-x-2 cursor-pointer hover:underline hover:text-gray-900 transition-colors duration-300">
              🌐 <span>Tiếng Việt (VN)</span>
            </span>
            <span className="cursor-pointer hover:underline hover:text-gray-900 transition-colors duration-300">
              ₫ VND
            </span>
            <div className="flex space-x-3">
              <a
                href="#"
                className="hover:underline hover:text-gray-900 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="hover:underline hover:text-gray-900 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="hover:underline hover:text-gray-900 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
