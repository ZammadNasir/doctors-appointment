import useHelper from "hooks/useHelper";

export default function Banner() {
  const { isMobile } = useHelper();
  return (
    <>
     <div style={{width: "100%", height:250}}>Banner</div>
    </>
  );
}
