import React from "react";
import styled from "styled-components";

const SidebarSt = styled("aside")`
    display: block;
    width: 300px;
    height: 100vh;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
    padding: 15px 10px;

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }
`;
//244	238	255
const UserSt = styled("section")`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > img {
        border-radius: 50%;
        margin-right: 10px;
    }
`;

interface IUser {
    name: string;
    img: string;
}
interface IProps {
    user: IUser;
}

const Sidebar = (props: IProps) => {
    return (
        <SidebarSt>
            <UserSt>
                <img src={props.user.img} alt={props.user.name} />
                <span>{props.user.name}</span>
            </UserSt>
            <ul>
                <li>Team To-Do List</li>
            </ul>
        </SidebarSt>
    );
};

export default Sidebar;
