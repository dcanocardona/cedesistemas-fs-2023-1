import styled from "styled-components";

const PageLoading = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side,#766DF4 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#766DF4);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;

  @keyframes s3{
  100%{transform: rotate(1turn)}
}
`;



export const LazyLoading = () => {

  return (
    <PageLoading>
      <CustomLoader />
    </PageLoading>
  )
}
