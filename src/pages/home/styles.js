import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`

export const Title = styled.h2`
    font-family: 'Open-sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-botton: 20px;
    line-height: 44px;

    color: #FFF1F4;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open-sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    width: 320px;
    margin-botton: 20px;
    line-height:30px;

    color: #FFFFFF;
`
export const BannerImage = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
`