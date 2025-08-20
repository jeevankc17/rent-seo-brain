"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// Update the import path below to the correct relative path where your articles data and types are defined.
// For example, if your articles file is at 'lib/articles.ts', use the following:
import { articlesData, Article, Tag } from "../../lib/articles";

const filterCategories = [
	{ id: "all", label: "ALL", active: true },
	{ id: "trending", label: "Trending", active: false },
	{ id: "technical", label: "Technical SEO", active: false },
	{ id: "local", label: "Local SEO", active: false },
];

export const ArticleCardsSection: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const router = useRouter();

	const handleFilterClick = (filterId: string) => {
		setActiveFilter(filterId);
		setCurrentPage(1);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
		setCurrentPage(1);
	};

	// Filter and search logic
	const filteredArticles = useMemo(() => {
		return articlesData.filter((article) => {
			// Filter by category
			const categoryMatch =
				activeFilter === "all" ||
				article.tags.some((tag) =>
					tag.label.toLowerCase().includes(activeFilter.toLowerCase())
				);

			// Filter by search query
			const searchMatch =
				searchQuery === "" ||
				article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				article.tags.some((tag) =>
					tag.label.toLowerCase().includes(searchQuery.toLowerCase())
				);

			return categoryMatch && searchMatch;
		});
	}, [activeFilter, searchQuery]);

	// Pagination logic
	const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentArticles = filteredArticles.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	// Group articles into rows of 3 for display
	const articleRows = [];
	for (let i = 0; i < currentArticles.length; i += 3) {
		articleRows.push(currentArticles.slice(i, i + 3));
	}

	// Generate pagination items
	const paginationItems = [];

	// Always show first page if there are pages
	if (totalPages > 0) {
		paginationItems.push(1);
	}

	// Show ellipsis if needed
	if (currentPage > 3) {
		paginationItems.push("ellipsis-left");
	}

	// Show current page and neighbors
	for (
		let i = Math.max(2, currentPage - 1);
		i <= Math.min(totalPages - 1, currentPage + 1);
		i++
	) {
		if (i !== 1 && i !== totalPages) {
			paginationItems.push(i);
		}
	}

	// Show ellipsis if needed
	if (currentPage < totalPages - 2 && totalPages > 4) {
		paginationItems.push("ellipsis-right");
	}

	// Always show last page if there is more than one page
	if (totalPages > 1) {
		paginationItems.push(totalPages);
	}

	const ArticleCard = ({ article }: { article: Article }) => (
		<article
			className="flex flex-col w-[360px] h-[460px] items-start gap-[18px] px-3.5 py-[21px] relative bg-white rounded-[11px] shadow-[0px_4px_25.6px_rgba(46,151,255,0.37)] cursor-pointer hover:shadow-lg transition-shadow"
			onClick={() => router.push(`/blog/${String(article.id)}`)}
			role="button"
			tabIndex={0}
			onKeyPress={(e) => {
				if (e.key === "Enter") router.push(`/blog/${String(article.id)}`);
			}}
			aria-label={`Read article: ${article.title}`}
		>
			<div
				className="relative self-stretch w-full h-[136px] rounded-[7px] bg-cover bg-[50%_50%]"
				style={{ backgroundImage: `url(${article.image})` }}
				role="img"
				aria-label="Article featured image"
			/>

			<div className="flex flex-col h-[264px] items-start gap-[15px] relative self-stretch w-full">
				<div className="flex flex-col h-[209px] items-start gap-2 relative self-stretch w-full">
					<div className="flex flex-col items-start gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
						<div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
							{article.tags.map((tag, index) => (
								<span
									key={index}
									className={`inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] ${tag.bgColor} rounded-[432px] border border-solid ${tag.borderColor}`}
								>
									<span
										className={`relative w-[63px] h-3.5 mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal ${tag.textColor} text-[10px] text-center tracking-[0] leading-[14px] whitespace-nowrap`}
									>
										{tag.label}
									</span>
								</span>
							))}
						</div>

						<h3 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-primary-75 text-lg tracking-[0] leading-[25px]">
							{article.title}
						</h3>

						<p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-sm tracking-[0] leading-[23px]">
							{article.description}
						</p>
					</div>

					<div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mb-[-4.00px]">
						<img
							className="relative w-4 h-4"
							alt="Clock icon"
							src="https://c.animaapp.com/VIaP56iJ/img/clock-2.svg"
						/>

						<span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-xs tracking-[0] leading-[23px] whitespace-nowrap">
							{article.readTime}
						</span>
					</div>
				</div>

				<footer className="flex items-center gap-[122px] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
					<div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
						<div
							className="relative w-[var(--size-icon-large)] h-[var(--size-icon-large)] rounded-[var(--size-radius-full)] bg-cover bg-[50%_50%]"
							style={{ backgroundImage: `url(${article.author.avatar})` }}
							role="img"
							aria-label={`${article.author.name} avatar`}
						/>

						<div className="flex flex-col w-[114px] items-start gap-1.5 relative">
							<span className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-sm tracking-[0] leading-[14px]">
								{article.author.name}
							</span>

							<span className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-xs tracking-[0] leading-[14px]">
								{article.author.role}
							</span>
						</div>
					</div>

					<button
						className="flex w-[41px] h-[41px] items-center justify-center gap-2.5 p-2.5 relative bg-grey-50 rounded-[87px] border border-solid border-grey-75 hover:bg-grey-75 transition-colors"
						aria-label="Read article"
					>
						<img
							className="relative w-6 h-6 mt-[-1.50px] mb-[-1.50px] ml-[-1.50px] mr-[-1.50px]"
							alt="Arrow up right"
							src="https://c.animaapp.com/VIaP56iJ/img/arrow-up-right-5.svg"
						/>
					</button>
				</footer>
			</div>
		</article>
	);

	return (
		<section className="flex-col w-[1132px] items-end justify-end gap-[50px] flex relative flex-[0_0_auto]">
			<header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
				<nav
					className="inline-flex items-start justify-center gap-2 relative flex-[0_0_auto]"
					role="tablist"
				>
					{filterCategories.map((category) => (
						<button
							key={category.id}
							onClick={() => handleFilterClick(category.id)}
							className={`flex items-center justify-center gap-1.5 px-2.5 py-[5px] relative rounded-[45px] transition-colors ${
								activeFilter === category.id
									? "bg-primary-100"
									: "bg-white border border-solid border-primary-100"
							}`}
							role="tab"
							aria-selected={activeFilter === category.id}
						>
							<span
								className={`relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-sm text-center tracking-[0] leading-[23px] ${
									activeFilter === category.id
										? "text-neutral-900"
										: "text-primary-100"
								}`}
							>
								{category.label}
							</span>
						</button>
					))}
				</nav>

				<div className="flex w-[218px] h-[33px] items-center gap-[5px] pl-[19px] pr-[21px] py-0 relative bg-white rounded-[324px] border border-solid border-grey-200">
					<img
						className="relative w-[13px] h-[13px]"
						alt="Search icon"
						src="https://c.animaapp.com/VIaP56iJ/img/search.svg"
					/>

					<input
						type="search"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Search ......."
						className="relative w-full [font-family:'Urbanist',Helvetica] font-medium text-grey-400 text-xs text-center tracking-[0] leading-[23px] bg-transparent border-none outline-none"
						aria-label="Search articles"
					/>
				</div>
			</header>

			<main className="flex flex-col gap-6 self-stretch w-full">
				{articleRows.length > 0 ? (
					articleRows.map((row, rowIndex) => (
						<div
							key={rowIndex}
							className="items-center justify-center gap-6 self-stretch w-full flex relative flex-[0_0_auto]"
						>
							{row.map((article) => (
								<ArticleCard key={article.id} article={article} />
							))}
						</div>
					))
				) : (
					<div className="flex justify-center items-center h-40">
						<p className="text-grey-400 text-lg">
							No articles found matching your criteria.
						</p>
					</div>
				)}
			</main>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-2 mt-4 w-full">
					{/* Previous button */}
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className="flex items-center gap-1 px-3 py-2 rounded-md text-grey-400 disabled:opacity-50 hover:bg-grey-50 transition-colors"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 12L6 8L10 4"
								stroke="#6A7986"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Previous
					</button>

					{/* Page numbers */}
					<div className="flex items-center gap-1">
						{paginationItems.map((item, index) => {
							if (item === "ellipsis-left" || item === "ellipsis-right") {
								return (
									<span key={index} className="px-3 py-2 text-grey-400">
										...
									</span>
								);
							}

							const page = item as number;
							return (
								<button
									key={index}
									onClick={() => setCurrentPage(page)}
									className={`w-10 h-10 flex items-center justify-center rounded-md ${
										currentPage === page
											? "bg-primary-100 text-white"
											: "text-grey-400 hover:bg-grey-50"
									} transition-colors`}
								>
									{page}
								</button>
							);
						})}
					</div>

					{/* Next button */}
					<button
						onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
						disabled={currentPage === totalPages}
						className="flex items-center gap-1 px-3 py-2 rounded-md text-grey-400 disabled:opacity-50 hover:bg-grey-50 transition-colors"
					>
						Next
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 4L10 8L6 12"
								stroke="#6A7986"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			)}
		</section>
	);
};