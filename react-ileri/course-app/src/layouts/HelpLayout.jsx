import { Outlet, Link } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help Layout</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        deserunt aspernatur assumenda voluptates earum. Culpa saepe quasi
        distinctio reiciendis sit quod. Necessitatibus sequi dolor nisi in
        molestias deleniti, culpa explicabo eaque debitis quo voluptate,
        nesciunt ut sint harum odio repellendus ipsam ab labore beatae sed!
      </p>
      <nav>
        <Link to="contact">Contact</Link>
        <Link to="faq">FAQ</Link>
      </nav>
      <Outlet />
    </div>
  );
}
