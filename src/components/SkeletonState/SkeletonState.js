import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Skeleton = styled.p`
    position: relative;
    padding: 0;
    background: #e5e5e5;
    border: none;
    box-shadow: none;
    pointer-events: none;
    width: ${props => props.width ? props.width: '100%'};
    height: 16px;
    margin-bottom: 8px;
    @keyframes skeleton {
        0% {
          right: auto;
          left: 0;
          width: 0%;
          opacity: 0.3;
        }
        20% {
          right: auto;
          left: 0;
          width: 100%;
          opacity: 1;
        }
        28% {
          right: 0;
          left: auto;
          width: 100%;
        }
        51% {
          right: 0;
          left: auto;
          width: 0%;
        }
        58% {
          right: 0;
          left: auto;
          width: 0%;
        }
        82% {
          right: 0;
          left: auto;
          width: 100%;
        }
        83% {
          right: auto;
          left: 0;
          width: 100%;
        }
        96% {
          right: auto;
          left: 0;
          width: 0%;
        }
        100% {
          right: auto;
          left: 0;
          width: 0%;
          opacity: 0.3;
        }
      }
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: #c6c6c6;
        animation: 3000ms ease-in-out skeleton infinite;
        content: '';
    }
`
const SkeletonState = ({width}) => {
  return (
       <Skeleton data-testid='SkeletonState' width={width}></Skeleton>
  );
};

SkeletonState.propTypes = {
  width: PropTypes.string
}

export default SkeletonState;
