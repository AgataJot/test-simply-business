import React from "react";
import styled from "styled-components";
import { MdList } from "react-icons/md";

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
        background-color: #f4eeff;
        padding: 12px 15px;
        font-weight: 600;
    }

    svg {
        color: #888888;
        vertical-align: middle;
        margin-right: 15px;
    }

    span {
        vertical-align: middle;
    }
`;

const UserSt = styled("section")`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
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
                <li>
                    <MdList />
                    <span>Team To-Do List</span>
                </li>
            </ul>
        </SidebarSt>
    );
};

export default Sidebar;
