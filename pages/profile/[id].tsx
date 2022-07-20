import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Member } from "../../interfaces/member.interface";
import { handleScroll, http } from "../../utils/utils";

const ProfilePage = (props: any) => {
  const [member] = useState<Member>(props.data);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="leading-normal tracking-normal gradient merrifont"
      style={{ fontFamily: "Merriweather, sans - serif" }}
      onScroll={handleScroll}
    >
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="my-3 text-2xl font-extrabold">PYO Institute Member</h1>
        </div>
        <div className=" flex flex-col items-center bg-white shadow-md min-w-[300px] min-h-[350px] max-w-[350px] rounded-lg overflow-hidden mx-4">
          <div className="profile-card min-h-[96px] w-full"></div>
          <img
            src={`https://via.placeholder.com/200x200/efefef/333333?text=${member?.firstName![0]}${member?.lastName![0]}`}
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-full -mt-12 bg-white p-1 shadow-md outline-white outline-2 outline-offset-2"
          />
          <h1 className="text-xl font-bold text-black font-sans my-2">
            {member.firstName + " " + member.lastName}
          </h1>
          <ul className="inline-flex flex-col space-y-2 w-[250px] mt-2 items-center">
            <li>
              <i className="fa-solid fa-envelope mr-2" /> {member.email}
            </li>
            <li>
              <i className="fa-solid fa-people-group mr-2" /> PYO Fellows
            </li>
            <li>
              <i className="fa-solid fa-location-dot mr-2" /> Nigeria
            </li>
          </ul>
          <hr className="w-[80%] h-[1px] mt-4" />
          <small className="text-sm py-3 px-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            reiciendis animi quas. Reprehenderit deleniti soluta animi odit,
            quo, nemo nisi non libero ducimus mollitia vitae aperiam laboriosam
            dolores, ab totam.
          </small>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const getdata = await http.get("/signup");
  const post = getdata.data.data;
  const paths = (post as any).map((item: Member) => {
    return { params: { id: item._id } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const members = await http.get(`/signup/${params?.id}`);
  return {
    props: {
      data: members.data.data,
    },
    revalidate: 10,
  };
};
