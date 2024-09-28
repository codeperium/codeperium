<script lang="ts">
	import type { Content } from '@prismicio/client';
	import * as AWS from '@aws-sdk/client-ses';
	import { PUBLIC_AWS_REGION } from '$env/static/public';
	const topics = ['Cooperation offer', 'Feature request', 'Bug report', 'Other'];

	let Name = $state('');
	let Email = $state('');
	let Message = $state('');
	let Topic = $state('');

	let params: {
		Destination: {
				/* required */
				CcAddresses: string[],
				ToAddresses: string[]
			},
			Message: {
				/* required */
				Body: {
					/* required */
					Html: {
						Charset: string,
						Data: string
					},
					Text: {
						Charset: string,
						Data: string
					}
				},
				Subject: {
					Charset: string,
					Data: string
				}
			},
			Source: string /* required */,
			ReplyToAddresses: string[],
			ReturnPath: string
	} = {
			Destination: {
				/* required */
				CcAddresses: [
					'contact@codeperium.io'
					/* more items */
				],
				ToAddresses: [
					'contact@codeperium.io'
					/* more items */
				]
			},
			Message: {
				/* required */
				Body: {
					/* required */
					Html: {
						Charset: 'UTF-8',
						Data: Message
					},
					Text: {
						Charset: 'UTF-8',
						Data: Message
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: Topic
				}
			},
			Source: Email /* required */,
			ReplyToAddresses: [Email],
			ReturnPath: 'report@codeperium.io'
		};

	$effect(() => {
		params = {
			Destination: {
				/* required */
				CcAddresses: [
					'contact@codeperium.io'
					/* more items */
				],
				ToAddresses: [
					'contact@codeperium.io'
					/* more items */
				]
			},
			Message: {
				/* required */
				Body: {
					/* required */
					Html: {
						Charset: 'UTF-8',
						Data: Message
					},
					Text: {
						Charset: 'UTF-8',
						Data: Message
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: Topic
				}
			},
			Source: Email /* required */,
			ReplyToAddresses: [Email],
			ReturnPath: 'report@codeperium.io'
		};
	});

	// Handle promise's fulfilled/rejected states
	const buttonAction = () => {
		const sendPromise = new AWS.SES({
			region: PUBLIC_AWS_REGION,
			apiVersion: 'latest',
			credentials: {
				secretAccessKey: 'Roa51aJZxBSB4W3tCzbtsxnYWYdaPH3BcxMLtBdQ',
				accessKeyId: 'AKIAS3VGHZ5BMOGUT2ZY'
			}
		}).sendEmail(params);

		sendPromise
			.then(function (data) {
				console.log(data.MessageId);
			})
			.catch(function (err) {
				console.error(err, err.stack);
			});
		window.location.reload();
	};
	let { slice }: { slice: Content.ContactFormSlice } = $props();
</script>

<div class="flex justify-center font-medium">
	<p>Contact form is not working currently, it's only a placeholder. <br>
		If any contact needed please reach to me at: <a href="mailto:contact@codeperium.io" class="hover:font-bold">contact@codeperium.io</a>
	</p>
</div>
<section class="flex justify-center">
	<form class="flex flex-col">
		<div class="flex gap-3">
			<div class="input-wrapper">
				<label for="Name" class="label">First and Last name</label>
				<input name="Name" type="text" bind:value={Name} class="input"/>
			</div>
			<div class="input-wrapper">
				<label for="Email" class="label">Email</label>
				<input name="Email"type="text" bind:value={Email} class="input"/>
			</div>
		</div>
		<div class="input-wrapper">
			<label for="topics" class="label">Subject</label>
			<select name="topics" id="topics" bind:value={Topic} class="w-full input">
				{#each topics as topic}
					<option value={topic}>{topic}</option>
				{/each}
			</select>
		</div>
		<div class="input-wrapper">	
			<label for="message" class="label">Message</label>
			<textarea name="message" id="message" bind:value={Message} class="w-full input" rows="5"></textarea>
		</div>
		<input type="button" onclick={buttonAction} value="send" class="bg-red text-white font-medium py-2 cursor-pointer hover:bg-gold hover:text-grey-dark" />
	</form>
</section>


<style lang="postcss"> 
	form {
		@apply mt-8 mb-12 gap-3;
		font-family: "Plus Jakarta Sans";
	}
	.input-wrapper {
		@apply relative bg-grey-light/10 py-3 px-4;
		.label {
			@apply absolute text-sm font-medium text-grey-dark h-[14px] leading-[14px];
		}
		.input {
			@apply  bg-transparent mt-4;
		}
	}
</style>