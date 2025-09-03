import Not404 from "/public/404.jpg";
export default function NotFound() {
  return (
    <div className="h-full flex items-center">
      <img
        className="w-full inline-block object-cover object-center"
        src={Not404.src}
        alt="404"
      />
    </div>
  );
}
