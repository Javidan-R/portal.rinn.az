import { useNavigate } from "react-router-dom";
import { Role } from "../../../models";

import LoginForm from "./LoginForm";

interface LoginData {
  username: string;
  password: string;
}

async function login(data: LoginData): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.username === "admin" && data.password === "admin") {
        localStorage.setItem("token", JSON.stringify(data));
        localStorage.setItem("role", Role.ADMIN);
        resolve("/admin/dashboard");
      } else if (data.username === "user" && data.password === "user") {
        localStorage.setItem("token", JSON.stringify(data));
        localStorage.setItem("role", Role.USER);
        resolve("/");
      } else {
        localStorage.clear();
        reject();
      }
    }, 1000);
  });
}

// const sectionStyles = {
//   heading: {
//     color: "var(--DarkPurple, #11142D)",
//     textAlign: "center",
//     fontFamily: "Cairo",
//     fontSize: "50px",
//     fontStyle: "normal",
//     fontWeight: 700,
//     lineHeight: "normal",
//   },
//   description: {
//     width: "80%",
//     color: "var(--DarkPurple, #11142D)",
//     textAlign: "center",
//     fontFamily: "Open Sans",
//     fontSize: "16px",
//     fontStyle: "normal",
//     fontWeight: 400,
//     lineHeight: "normal",
//     margin: "auto",
//   },
// };

interface PageSectionProps {
  children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ children }) => (
  <div className="pt-10 pb-4">{children}</div>
);

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: LoginData = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try {
      const route = await login(data);
      navigate(route);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto p-6">
      <LoginForm handleSubmit={()=>handleSubmit} />

      <PageSection>
        <div>
          <h3 className="flex justify-center m-4" >
            Special Offers
          </h3>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </PageSection>

    </div>
  );
};
