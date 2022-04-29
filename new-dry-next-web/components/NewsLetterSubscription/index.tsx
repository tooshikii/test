import React, { useLayoutEffect, useState } from "react";

const widget = `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{ clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://dryagency.us5.list-manage.com/subscribe/post?u=00f3c7e3cc31c2ad4ca29f331&amp;id=45ed4edcb4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_00f3c7e3cc31c2ad4ca29f331_45ed4edcb4" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->`;

const NewsLetterSubscription: React.ComponentType = () => {
  const [renderWidget, setRenderWidget] = useState<boolean>(false);

  useLayoutEffect(() => {
    setRenderWidget(true);
  }, []);

  return (
    <div className={"w-full "}>
      <div className={"m-auto"}>
        <div
          style={{ fontFamily: '"DRYCUSTOM"', letterSpacing: 1 }}
          className={"font-bold  text-6xl  text-center  shadow-sm"}
        >
          NEWS LETTER
        </div>
        {renderWidget && (
          <div
            className={"mx-2.5"}
            dangerouslySetInnerHTML={{ __html: widget }}
          />
        )}
      </div>
    </div>
  );
};
export default NewsLetterSubscription;
