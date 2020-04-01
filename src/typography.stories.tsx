import React from "react";

export default {
    title: "Typography",
};

export const Headings = () => (
    <>
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
        <h5>H5 Heading</h5>
        <h6>H6 Heading</h6>
    </>
);

export const Paragraphs = () => (
    <>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
        </p>
        <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </>
);

export const Semantics = () => (
    <>
        <abbr title="Internationalization">I18N</abbr>
        <br />
        <strong>Bold</strong>
        <br />
        <cite>Citation</cite>
        <br />
        <code>Hello World!</code>
        <br />
        <del>Deleted</del>
        <br />
        <em>Emphasis</em>
        <br />
        <i>Italic</i>
        <br />
        <ins>Inserted</ins>
        <br />
        <kbd>Ctrl + S</kbd>
        <br />
        <mark>Highlighted</mark>
        <br />
        <s>Strikethrough</s>
        <br />
        <samp>Sample</samp>
        <br />
        text <sub> Subscripted</sub>
        <br />
        text <sup> Superscripted</sup>
        <br />
        <time>20:00</time>
        <br />
        <u>Underline</u>
        <br />
        <var>x</var> = <var>y</var> + 2
        <br />
    </>
);

export const HorizontalRule = () => (
    <>
        <hr />
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
        </p>
        <div className="hr-text">
            <span>Rule text</span>
        </div>
        <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div className="hr-text hr-text-center">
            <span>Rule text</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
        </p>
        <div className="hr-text hr-text-right">
            <span>Rule text</span>
        </div>
        <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
    </>
);

export const TextTransform = () => (
    <>
        <p className="text-lowercase">Lowercased text.</p>
        <p className="text-uppercase">Uppercased text.</p>
        <p className="text-capitalize">Capitalized text.</p>
    </>
);

export const LetterSpacing = () => (
    <>
        <p className="tracking-tight">
            Lorem ipsum dolor sit amet. Tight letter spacing.
        </p>
        <p className="tracking-normal">
            Lorem ipsum dolor sit amet. Normal letter spacing.
        </p>
        <p className="tracking-wide">
            Lorem ipsum dolor sit amet. Wide letter spacing.
        </p>
    </>
);

export const LineHeight = () => (
    <>
        <p className="lh-1">
            Lorem ipsum dolor sit amet.
            <br />
            Dolor sit amet.
        </p>
        <p className="lh-sm">
            Lorem ipsum dolor sit amet.
            <br />
            Dolor sit amet.
        </p>
        <p className="lh-base">
            Lorem ipsum dolor sit amet.
            <br />
            Dolor sit amet.
        </p>
        <p className="lh-lg">
            Lorem ipsum dolor sit amet.
            <br />
            Dolor sit amet.
        </p>
    </>
);

export const Antialiasing = () => (
    <>
        <div className="antialiased">Text with antialiasing</div>
        <div className="subpixel-antialiased">Text without antialiasing</div>
    </>
);

export const Markdown = () => (
    <div className="markdown">
        <h1>Hello World</h1>
        <p>
            Lorem ipsum
            <sup>
                <a>[1]</a>
            </sup>{" "}
            dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
            ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
            nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin
            vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!
        </p>
        <h2>Second level</h2>
        <p>
            Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>{" "}
            blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id.
            Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam
            mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
            neque nisl.
        </p>
        <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>
                Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
            </li>
            <li>Ut non enim metus.</li>
        </ul>
    </div>
);
