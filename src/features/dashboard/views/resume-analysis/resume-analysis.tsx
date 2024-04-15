import React from 'react';

import { CallToAction, Flex, Heading, Text } from '@labs/components';
import { ScoreCounter } from '@/components/score-counter';
import { Accordion } from '@labs/components/accordion';
import { Progress } from '@/components/misc/progress';

import { ResumeAnalysisInfo } from '.';

import styles from './resume-analysis.module.scss';

export const ResumeAnalysis = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	// reduce the ResumeAnalysisInfo array to get the overall score percentage
	const score =
		ResumeAnalysisInfo.reduce((total, item) => total + item.score, 0) /
		ResumeAnalysisInfo.length;

	return (
		<div className={styles.ResumeAnalysis}>
			<Flex.Column gap={6}>
				<Flex alignItems="center" gap={12}>
					<Heading.h3 weight={400} animate="slide">
						Resume Analysis
					</Heading.h3>
				</Flex>
				<Text color="var(--text-gray)" animate="fade" className="mb-[40px]">
					A breakdown of how your resume can be better
				</Text>
			</Flex.Column>
			<Flex.Row gap={32} className={styles.ResumeAnalysisSection}>
				<aside className={styles.ResumeAnalysisAside}>
					<Flex.Column
						gap={19.03}
						alignItems="center"
						className={styles.ResumeAnalysisBox}
					>
						<Flex.Column
							alignItems="center"
							justifyContent="center"
							className={styles.ResumeOverallScoreCounter}
						>
							<ScoreCounter className={styles.ResumeScoreSvg} score={score} />
							<Heading.h5 fontSize="28px" weight={700}>
								{score}
							</Heading.h5>
							<Text.p weight={500} size="sm">
								Overall score
							</Text.p>
						</Flex.Column>
						<Text.p weight={700}>Score Breakdown</Text.p>
						<Flex.Column gap={19.03} className={styles.ResumeScoreBreakDown}>
							{ResumeAnalysisInfo.map((item) => (
								<div key={item.label} className={styles.ResumeScoreItem}>
									<Flex.Row
										key={item.label}
										className={styles.ResumeScoreTitle}
									>
										<Text.p size="sm" casing="capitalize">
											{item.label}
										</Text.p>
										<Text.p size="sm" weight={600} color={item.color}>
											{item.score}/100
										</Text.p>
									</Flex.Row>
									{/*
									 * Render progress bar to visualize score
									 * Added 20 as alpha value to get the proper opacity for the background
									 */}

									<Progress value={item.score} color={item.color} />
								</div>
							))}
						</Flex.Column>
					</Flex.Column>
				</aside>
				<Flex.Column gap={24} className={styles.ResumeAnalysisMain}>
					<Flex.Column gap={14} className={styles.ResumeAnalysisBox}>
						<Heading.h4 weight={500} animate="slide">
							Your resume could be improved!
						</Heading.h4>
						<Text color="var(--text-gray)" animate="fade">
							A general summary note on how the resume can be improved. Could be
							generated by AI to make it unique per different user.
						</Text>
						<CallToAction className="mt-[10px]">Build Resume</CallToAction>
					</Flex.Column>
					<Flex.Column gap={12}>
						<Heading.h6 weight={600} animate="slide">
							Analysis
						</Heading.h6>
						<Flex.Column gap={16} fullWidth>
							<Accordion.Group allowMultiple>
								{ResumeAnalysisInfo.map((item, index) => (
									<Accordion
										key={index}
										dataKey={`${index}:accordion`}
										className={styles.AccordionItem}
										title={
											<Flex.Row
												alignItems="center"
												justifyContent="space-between"
											>
												<Flex.Row
													alignItems="center"
													gap={12}
													className={styles.AccordionHeader}
												>
													<Text.p
														fontSize="18px"
														weight={700}
														casing="capitalize"
													>
														{item.label}
													</Text.p>
													<div
														style={{
															background: item.color + '10',
															borderColor: item.color + '20',
														}}
														className={styles.ResumeScoreIndicator}
													>
														<Text.p weight={600} color={item.color} size="sm">
															{item.score}/100
														</Text.p>
													</div>
												</Flex.Row>
											</Flex.Row>
										}
									>
										<div className={styles.AccordionContent}>
											<Text.p weight={600}>Problem: {item.problem}</Text.p>
											<div className={styles.AccordionContentItem}>
												<Text.p weight={600}>Solution:</Text.p>
												<ul className={styles.ResumeList}>
													{item.solutions.map((solution, index) => (
														<li key={index} className={styles.ResumeListItem}>
															{solution}
														</li>
													))}
												</ul>
											</div>
										</div>
									</Accordion>
								))}
							</Accordion.Group>
						</Flex.Column>
					</Flex.Column>
				</Flex.Column>
			</Flex.Row>
		</div>
	);
};
