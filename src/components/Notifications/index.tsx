import React from 'react';
import styles from './Notifications.module.scss';
import { CallToAction, Flex, Text } from '@labs/components';

import JobIcon from '@labs/icons/dashboard/jobs.svg';
import CheckMonochromeIcon from '@labs/icons/dashboard/check_monochrome.svg';
import CloseIcon from '@labs/icons/dashboard/X.svg';

export function NotificationListContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Flex.Column
			alignItems="center"
			className={styles.NotificationListContainer}
			gap={40}
		>
			{children}
		</Flex.Column>
	);
}

interface NotificationListItemProps {
	type?: 'projectSetup' | 'job';
	title: string;
	description: string;
	time: string;
}

export function NotificationListItem({
	title,
	description,
	time,
	type = 'job',
}: NotificationListItemProps) {
	return (
		<div className={styles.NotificationListItem}>
			<div className="rounded-[38px] aspect-square p-4 border-2 border-[#F3F4F4] bg-[#F9FAFA] mr-6">
				{type === 'job' ? <JobIcon /> : <CheckMonochromeIcon />}
			</div>
			<Flex.Column gap={6}>
				<Text color="var(--text-black)" weight={600} fontSize="17px">
					{title}
				</Text>
				<Text color="var(--text-gray)">{description}</Text>
				<Text color="#3F4C58" fontSize="11px" weight={600} className="mt-4">
					{time} ago
				</Text>
			</Flex.Column>
			<div className="justify-end">
				<Flex.Row gap={8} className="justify-self-end justify-end">
					{type === 'job' ? (
						<>
							<CallToAction outline>Save</CallToAction>
							<CallToAction>Apply</CallToAction>
						</>
					) : (
						<CallToAction variant="clear">
							<CloseIcon />
						</CallToAction>
					)}
				</Flex.Row>
			</div>
		</div>
	);
}

export default function Notifications({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={styles.NotificationsContainer}>
			<NotificationListContainer>{children}</NotificationListContainer>
		</div>
	);
}
