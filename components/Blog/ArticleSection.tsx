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
			className="flex flex-col w-full md:w-[320px] lg:w-[360px] h-auto md:h-[420px] lg:h-[460px] items-start gap-3 md:gap-4 lg:gap-[18px] px-3 md:px-3.5 py-4 md:py-5 lg:py-[21px] relative bg-white rounded-[8px] md:rounded-[11px] shadow-[0px_4px_25.6px_rgba(46,151,255,0.37)] cursor-pointer hover:shadow-lg transition-shadow"
			onClick={() => router.push(`/blog/${String(article.id)}`)}
			role="button"
			tabIndex={0}
			onKeyPress={(e) => {
				if (e.key === "Enter") router.push(`/blog/${String(article.id)}`);
			}}
			aria-label={`Read article: ${article.title}`}
		>
			<div
				className="relative self-stretch w-full h-[120px] md:h-[136px] rounded-[5px] md:rounded-[7px] bg-cover bg-[50%_50%]"
				style={{ backgroundImage: `url(${article.image})` }}
				role="img"
				aria-label="Article featured image"
			/>

			<div className="flex flex-col h-auto md:h-[240px] lg:h-[264px] items-start gap-3 md:gap-4 lg:gap-[15px] relative self-stretch w-full">
				<div className="flex flex-col h-auto md:h-[190px] lg:h-[209px] items-start gap-2 relative self-stretch w-full">
					<div className="flex flex-col items-start gap-2 md:gap-[6px] lg:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
						<div className="inline-flex items-start gap-1 md:gap-2 lg:gap-[9px] relative flex-[0_0_auto]">
							{article.tags.map((tag, index) => (
								<span
									key={index}
									className={`inline-flex items-center justify-center gap-1 md:gap-2 lg:gap-2.5 px-2 md:px-2.5 py-[2px] md:py-1 relative flex-[0_0_auto] ${tag.bgColor} rounded-[432px] border border-solid ${tag.borderColor}`}
								>
									<span
										className={`relative w-auto h-auto mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal ${tag.textColor} text-[8px] md:text-[9px] lg:text-[10px] text-center tracking-[0] leading-[12px] md:leading-[14px] whitespace-nowrap`}
									>
										{tag.label}
									</span>
								</span>
							))}
						</div>

						<h3 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-primary-75 text-sm md:text-base lg:text-lg tracking-[0] leading-[18px] md:leading-[22px] lg:leading-[25px]">
							{article.title}
						</h3>

						<p className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-xs md:text-sm tracking-[0] leading-[16px] md:leading-[20px] lg:leading-[23px]">
							{article.description}
						</p>
					</div>

					<div className="inline-flex items-center gap-1 md:gap-1.5 relative flex-[0_0_auto] mb-[-2.00px] md:mb-[-4.00px]">
						<img
							className="relative w-3 md:w-4 h-3 md:h-4"
							alt="Clock icon"
							src="/Blog/ca/clock-2.svg"
						/>

						<span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-grey-400 text-[10px] md:text-xs tracking-[0] leading-[16px] md:leading-[20px] lg:leading-[23px] whitespace-nowrap">
							{article.readTime}
						</span>
					</div>
				</div>

				<footer className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px]">
					<div className="inline-flex items-center gap-2 md:gap-3 lg:gap-[15px] relative flex-[0_0_auto]">
						<div
							className="relative w-[28px] md:w-[32px] lg:w-[40px] h-[28px] md:h-[32px] lg:h-[40px] rounded-full bg-cover bg-[50%_50%]"
							style={{ backgroundImage: `url(${article.author.avatar})` }}
							role="img"
							aria-label={`${article.author.name} avatar`}
						/>

						<div className="flex flex-col w-auto md:w-[100px] lg:w-[114px] items-start gap-[2px] md:gap-1 lg:gap-1.5 relative">
							<span className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-neutral-0 text-xs md:text-sm tracking-[0] leading-[12px] md:leading-[14px]">
								{article.author.name}
							</span>

							<span className="relative self-stretch [font-family:'Urbanist',Helvetica] font-normal text-grey-500 text-[10px] md:text-xs tracking-[0] leading-[12px] md:leading-[14px]">
								{article.author.role}
							</span>
						</div>
					</div>

					<button
						className="flex w-[32px] md:w-[36px] lg:w-[41px] h-[32px] md:h-[36px] lg:h-[41px] items-center justify-center gap-1 md:gap-2 lg:gap-2.5 p-2 md:p-2.5 relative bg-grey-50 rounded-[87px] border border-solid border-grey-75 hover:bg-grey-75 transition-colors"
						aria-label="Read article"
					>
						<img
							className="relative w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px]"
							alt="Arrow up right"
							src="/Blog/ca/arrow-up-right-5.svg"
						/>
					</button>
				</footer>
			</div>
		</article>
	);

	return (
		<section className="flex-col w-full max-w-[1132px] items-end justify-end gap-8 md:gap-12 lg:gap-[50px] flex relative flex-[0_0_auto]">
			<header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 relative self-stretch w-full flex-[0_0_auto]">
				<nav
					className="inline-flex items-start justify-center gap-1 md:gap-2 relative flex-[0_0_auto] overflow-x-auto"
					role="tablist"
				>
					{filterCategories.map((category) => (
						<button
							key={category.id}
							onClick={() => handleFilterClick(category.id)}
							className={`flex items-center justify-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-[4px] md:py-[5px] relative rounded-[35px] md:rounded-[45px] transition-colors whitespace-nowrap ${
								activeFilter === category.id
									? "bg-primary-100"
									: "bg-white border border-solid border-primary-100"
							}`}
							role="tab"
							aria-selected={activeFilter === category.id}
						>
							<span
								className={`relative mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-xs md:text-sm text-center tracking-[0] leading-[18px] md:leading-[23px] ${
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

				<div className="flex w-full md:w-[200px] lg:w-[218px] h-[30px] md:h-[33px] items-center gap-[4px] md:gap-[5px] pl-4 md:pl-[19px] pr-4 md:pr-[21px] py-0 relative bg-white rounded-[300px] md:rounded-[324px] border border-solid border-grey-200">
					<img
						className="relative w-3 md:w-[13px] h-3 md:h-[13px]"
						alt="Search icon"
						src="/Blog/ca/search.svg"
					/>

					<input
						type="search"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Search......."
						className="relative w-full [font-family:'Urbanist',Helvetica] font-medium text-grey-400 text-[10px] md:text-xs text-center tracking-[0] leading-[18px] md:leading-[23px] bg-transparent border-none outline-none"
						aria-label="Search articles"
					/>
				</div>
			</header>

			<main className="flex flex-col gap-4 md:gap-6 self-stretch w-full">
				{articleRows.length > 0 ? (
					articleRows.map((row, rowIndex) => (
						<div
							key={rowIndex}
							className="items-center justify-center gap-4 md:gap-6 self-stretch w-full flex flex-col md:flex-row relative flex-[0_0_auto]"
						>
							{row.map((article) => (
								<ArticleCard key={article.id} article={article} />
							))}
						</div>
					))
				) : (
					<div className="flex justify-center items-center h-32 md:h-40">
						<p className="text-grey-400 text-base md:text-lg">
							No articles found matching your criteria.
						</p>
					</div>
				)}
			</main>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-1 md:gap-2 mt-3 md:mt-4 w-full">
					{/* Previous button */}
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-2 rounded-md text-grey-400 disabled:opacity-50 hover:bg-grey-50 transition-colors text-xs md:text-sm"
					>
						<svg
							width="14"
							height="14"
							className="md:w-4 md:h-4"
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
					<div className="flex items-center gap-[2px] md:gap-1">
						{paginationItems.map((item, index) => {
							if (item === "ellipsis-left" || item === "ellipsis-right") {
								return (
									<span key={index} className="px-2 md:px-3 py-1 md:py-2 text-grey-400 text-xs md:text-sm">
										...
									</span>
								);
							}

							const page = item as number;
							return (
								<button
									key={index}
									onClick={() => setCurrentPage(page)}
									className={`w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-md text-xs md:text-sm ${
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
						className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-2 rounded-md text-grey-400 disabled:opacity-50 hover:bg-grey-50 transition-colors text-xs md:text-sm"
					>
						Next
						<svg
							width="14"
							height="14"
							className="md:w-4 md:h-4"
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