import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
            mobileMenuOpen: false,
            cartOpen: false,
            searchOpen: false,
            searchQuery: '',
            currentFilter: 'all',
            wishlistItems: [],
            cartItems: [],
            selectedProduct: null,
            modalQuantity: 1,
            newChatMessage: '',
            chatMessages: [
                {
                    productId: 1,
                    messages: [
                        {
                            name: 'Emily Green',
                            avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
                            text: 'I\'ve been using this bottle for 3 months now and it keeps my drinks cold for hours!',
                            time: '2 hours ago',
                            isUser: false
                        },
                        {
                            name: 'David Wilson',
                            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
                            text: 'Is it dishwasher safe? The description doesn\'t mention that.',
                            time: '1 hour ago',
                            isUser: false
                        },
                        {
                            name: 'Sophie M.',
                            avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
                            text: 'Yes, I\'ve put mine in the dishwasher many times with no issues!',
                            time: '45 minutes ago',
                            isUser: false
                        }
                    ]
                },
                {
                    productId: 2,
                    messages: [
                        {
                            name: 'Marcus Lee',
                            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                            text: 'These toothbrushes are great! My whole family switched to them.',
                            time: '3 hours ago',
                            isUser: false
                        },
                        {
                            name: 'Amanda J.',
                            avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
                            text: 'How long do they typically last?',
                            time: '2 hours ago',
                            isUser: false
                        }
                    ]
                }
            ],
            categories: [
                {
                    id: 1,
                    name: 'Home & Kitchen',
                    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                },
                {
                    id: 2,
                    name: 'Beauty & Personal Care',
                    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
                },
                {
                    id: 3,
                    name: 'Fashion',
                    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
                },
                {
                    id: 4,
                    name: 'Food & Beverages',
                    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80'
                }
            ],
            products: [
                {
                    id: 1,
                    name: 'Eco-Friendly Water Bottle',
                    price: 24.99,
                    oldPrice: 29.99,
                    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
                    rating: 5,
                    reviewCount: 124,
                    badge: 'New',
                    category: 'Home & Kitchen',
                    popular: true,
                    newest: true
                },
                {
                    id: 2,
                    name: 'Bamboo Toothbrush Set',
                    price: 12.99,
                    oldPrice: null,
                    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
                    rating: 4,
                    reviewCount: 89,
                    badge: null,
                    category: 'Beauty & Personal Care',
                    popular: true,
                    newest: false
                },
                {
                    id: 3,
                    name: 'Organic Cotton T-Shirt',
                    price: 34.99,
                    oldPrice: 39.99,
                    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
                    rating: 4,
                    reviewCount: 56,
                    badge: 'Sale',
                    category: 'Fashion',
                    popular: false,
                    newest: true
                },
                {
                    id: 4,
                    name: 'Reusable Produce Bags',
                    price: 15.99,
                    oldPrice: null,
                    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
                    rating: 5,
                    reviewCount: 112,
                    badge: null,
                    category: 'Home & Kitchen',
                    popular: true,
                    newest: false
                },
                {
                    id: 5,
                    name: 'Natural Face Serum',
                    price: 42.99,
                    oldPrice: 49.99,
                    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
                    rating: 4,
                    reviewCount: 78,
                    badge: 'Popular',
                    category: 'Beauty & Personal Care',
                    popular: true,
                    newest: true
                },
                {
                    id: 6,
                    name: 'Recycled Notebook',
                    price: 9.99,
                    oldPrice: null,
                    image: 'https://images.unsplash.com/photo-1589203832113-fce74a3e55a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
                    rating: 5,
                    reviewCount: 45,
                    badge: null,
                    category: 'Home & Kitchen',
                    popular: false,
                    newest: true
                },
                {
                    id: 7,
                    name: 'Sustainable Coffee Mug',
                    price: 18.99,
                    oldPrice: 22.99,
                    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
                    rating: 4,
                    reviewCount: 67,
                    badge: 'Sale',
                    category: 'Home & Kitchen',
                    popular: true,
                    newest: false
                },
                {
                    id: 8,
                    name: 'Organic Lip Balm',
                    price: 7.99,
                    oldPrice: null,
                    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
                    rating: 5,
                    reviewCount: 34,
                    badge: 'New',
                    category: 'Beauty & Personal Care',
                    popular: false,
                    newest: true
                }
            ],
            testimonials: [
                {
                    id: 1,
                    name: 'Sarah Johnson',
                    location: 'New York, USA',
                    text: 'I\'ve been shopping at EcoShop for over a year now, and I\'m so impressed with the quality of their products. The bamboo toothbrushes have been a game-changer for my family. We\'ve significantly reduced our plastic waste!',
                    rating: 5,
                    image: 'https://randomuser.me/api/portraits/women/32.jpg'
                },
                {
                    id: 2,
                    name: 'Michael Chen',
                    location: 'Portland, USA',
                    text: 'The customer service at EcoShop is exceptional. I had a question about one of their products, and they responded immediately with helpful information. The reusable produce bags I ordered are durable and perfect for my weekly grocery shopping.',
                    rating: 4,
                    image: 'https://randomuser.me/api/portraits/men/47.jpg'
                },
                {
                    id: 3,
                    name: 'Emma Rodriguez',
                    location: 'London, UK',
                    text: 'I love that I can shop for eco-friendly products all in one place. The packaging is minimal and recyclable, which aligns perfectly with my zero-waste lifestyle goals. Will definitely continue shopping here!',
                    rating: 5,
                    image: 'https://randomuser.me/api/portraits/women/49.jpg'
                }
            ]
        };
    },
    computed: {
        filteredProducts() {
            let filtered = [...this.products];
            
            if (this.searchQuery.trim() !== '') {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(product => 
                    product.name.toLowerCase().includes(query) || 
                    product.category.toLowerCase().includes(query)
                );
            }
            
            switch(this.currentFilter) {
                case 'popular':
                    filtered = filtered.filter(product => product.popular);
                    break;
                case 'newest':
                    filtered = filtered.filter(product => product.newest);
                    break;
                case 'price-low':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                default:
                    // 'all' - no additional filtering needed
                    break;
            }
            
            return filtered;
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            if (this.mobileMenuOpen) {
                this.cartOpen = false;
                this.searchOpen = false;
                this.selectedProduct = null;
            }
        },
        toggleCart() {
            this.cartOpen = !this.cartOpen;
            if (this.cartOpen) {
                this.mobileMenuOpen = false;
                this.searchOpen = false;
                this.selectedProduct = null;
            }
        },
        toggleSearch() {
            this.searchOpen = !this.searchOpen;
            if (this.searchOpen) {
                this.mobileMenuOpen = false;
                this.cartOpen = false;
                this.selectedProduct = null;
                setTimeout(() => document.querySelector('.search-overlay input').focus(), 100);
            }
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
        closeAll() {
            this.mobileMenuOpen = false;
            this.cartOpen = false;
            this.searchOpen = false;
            this.selectedProduct = null;
        },
        addToCart(product) {
            const existingItem = this.cartItems.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cartItems.push({
                    ...product,
                    quantity: 1
                });
            }
            
            // Show cart after adding item
            this.cartOpen = true;
        },
        removeFromCart(index) {
            this.cartItems.splice(index, 1);
        },
        increaseQuantity(index) {
            this.cartItems[index].quantity++;
        },
        decreaseQuantity(index) {
            if (this.cartItems[index].quantity > 1) {
                this.cartItems[index].quantity--;
            } else {
                this.removeFromCart(index);
            }
        },
        calculateTotal() {
            return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        toggleWishlist(product) {
            const index = this.wishlistItems.findIndex(item => item.id === product.id);
            
            if (index === -1) {
                this.wishlistItems.push(product);
            } else {
                this.wishlistItems.splice(index, 1);
            }
        },
        isInWishlist(product) {
            return this.wishlistItems.some(item => item.id === product.id);
        },
        quickView(product) {
            this.selectedProduct = product;
            this.modalQuantity = 1;
        },
        closeProductModal() {
            this.selectedProduct = null;
            this.modalQuantity = 1;
        },
        increaseModalQuantity() {
            this.modalQuantity++;
        },
        decreaseModalQuantity() {
            if (this.modalQuantity > 1) {
                this.modalQuantity--;
            }
        },
        addToCartFromModal() {
            if (!this.selectedProduct) return;
            
            const existingItem = this.cartItems.find(item => item.id === this.selectedProduct.id);
            
            if (existingItem) {
                existingItem.quantity += this.modalQuantity;
            } else {
                this.cartItems.push({
                    ...this.selectedProduct,
                    quantity: this.modalQuantity
                });
            }
            
            this.closeProductModal();
            this.cartOpen = true;
        },
        addChatMessage() {
            if (!this.newChatMessage.trim() || !this.selectedProduct) return;
            
            // Find or create chat for current product
            let productChat = this.chatMessages.find(chat => chat.productId === this.selectedProduct.id);
            
            if (!productChat) {
                productChat = {
                    productId: this.selectedProduct.id,
                    messages: []
                };
                this.chatMessages.push(productChat);
            }
            
            // Add user message
            productChat.messages.push({
                name: 'You',
                avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
                text: this.newChatMessage,
                time: 'Just now',
                isUser: true
            });
            
            // Clear input
            this.newChatMessage = '';
            
            // Auto-scroll to bottom
            this.$nextTick(() => {
                const container = document.querySelector('.review-messages');
                if (container) {
                    container.scrollTop = container.scrollHeight;
                }
            });
        },
        getChatMessages(productId) {
            const productChat = this.chatMessages.find(chat => chat.productId === productId);
            return productChat ? productChat.messages : [];
        }
    },
    mounted() {
        // Close mobile menu when clicking outside of it
        document.addEventListener('click', (event) => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            
            if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                this.mobileMenuOpen = false;
            }
        });
        
        // Handle responsive behavior
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992 && this.mobileMenuOpen) {
                this.mobileMenuOpen = false;
            }
        });
        
        // Fix for iOS 100vh issue
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }
});

app.mount('#app');