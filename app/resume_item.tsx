export default function ResumeItem(props: {
  name?: string;
  sub?: string;
  desc?: string;
}) {
  return (
    <>
      <p className="inline text-md font-normal">
        {props.name ? <strong className="mr-3">{props.name}</strong> : ""}
        {props.sub}
      </p>
      {props.desc ? (
        <>
          <p className="text-md font-normal ml-7">
            <em>{props.desc}</em>
          </p>
        </>
      ) : (
        ""
      )}

      <br />
    </>
  );
}
