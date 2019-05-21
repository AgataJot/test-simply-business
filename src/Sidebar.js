import React from "react";
import styled from "styled-components";

const SidebarSt = styled.aside`
    display: block;
    width: 200px;
    height: 100vh;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`;

function Sidebar() {
    return <SidebarSt>This is the sidebar</SidebarSt>;
}

export default Sidebar;
