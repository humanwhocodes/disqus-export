export interface DisqusComment {
    editableUntil: string
    dislikes: number
    thread: DisqusThread
    numReports: number
    likes: number
    message: string
    id: string
    createdAt: string
    author: DisqusAuthor
    media: DisqusMedium[]
    isSpam: boolean
    isDeletedByDisqusAuthor: boolean
    isHighlighted: boolean
    parent?: number
    isApproved: boolean
    isNewUserNeedsApproval: boolean
    isDeleted: boolean
    isFlagged: boolean
    raw_message: string
    isAtFlagLimit: boolean
    canVote: boolean
    forum: string
    url: string
    points: number
    moderationLabels: string[]
    isEdited: boolean
    sb: boolean
}

export interface DisqusThread {
    feed: string
    clean_title: string
    dislikes: number
    likes: number
    message: string
    ratingsEnabled: boolean
    isSpam: boolean
    isDeleted: boolean
    category: string
    adsDisabled: boolean
    author: string
    userScore: number
    id: string
    signedLink: string
    createdAt: string
    hasStreaming: boolean
    raw_message: string
    isClosed: boolean
    link: string
    slug: string
    forum: string
    identifiers: string[]
    posts: number
    userSubscription: boolean
    validateAllPosts: boolean
    title: string
    highlightedPost: any
}

export interface DisqusAuthor {
    name: string
    url: string
    profileUrl: string
    emailHash?: string
    avatar: DisqusAvatar
    signedUrl: string
    isAnonymous: boolean
    username?: string
    about?: string
    disable3rdPartyTrackers?: boolean
    isPowerContributor?: boolean
    joinedAt?: string
    location?: string
    isPrivate?: boolean
    isPrimary?: boolean
    id?: string
}

export interface DisqusAvatar {
    small: DisqusImage
    large: DisqusImage
    permalink: string
    cache: string
    xlarge?: DisqusImage
    isCustom?: DisqusImage
}

export interface DisqusImage {
    permalink: string
    cache: string
}

export interface DisqusMedium {
    providerName: string
    resolvedUrl: string
    thumbnailUrl: string
    htmlHeight: number
    id: number
    thumbnailWidth: number
    title: string
    htmlWidth: number
    mediaType: string
    html: string
    location: string
    type: string
    metadata: DisqusMetadata
    urlRedirect: string
    description: string
    post: string
    thumbnailURL: string
    thread: string
    forum: string
    url: string
    resolvedUrlRedirect: string
    thumbnailHeight: number
}

export interface DisqusMetadata {
    create_method: string
    thumbnail: string
}
