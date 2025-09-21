import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const products = [
  {
    id: "laptop-pro-2024",
    name: "UltraBook Pro 2024",
    price: 1299,
    originalPrice: 1499,
    category: "Laptops",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop",
    badge: "Best Seller",
    features: ["16GB RAM", "512GB SSD", "M2 Chip"]
  },
  {
    id: "smartphone-x12",
    name: "SmartPhone X12",
    price: 899,
    originalPrice: 999,
    category: "Phones",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop",
    badge: "New",
    features: ["5G Ready", "128GB", "Triple Camera"]
  },
  {
    id: "headphones-elite",
    name: "Elite Headphones",
    price: 299,
    originalPrice: 399,
    category: "Audio",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
    badge: "Sale",
    features: ["Noise Canceling", "40Hr Battery", "Premium Sound"]
  },
  {
    id: "tablet-air",
    name: "Tablet Air",
    price: 649,
    originalPrice: 749,
    category: "Tablets",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=400&fit=crop",
    badge: "Popular",
    features: ["11-inch Display", "256GB", "Apple Pencil Ready"]
  },
  {
    id: "smartwatch-s5",
    name: "SmartWatch S5",
    price: 399,
    originalPrice: 499,
    category: "Wearables",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop",
    badge: "Featured",
    features: ["Health Tracking", "GPS", "7-day Battery"]
  },
  {
    id: "speaker-360",
    name: "360° Speaker",
    price: 199,
    originalPrice: 249,
    category: "Audio",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400&fit=crop",
    badge: "Trending",
    features: ["360° Sound", "Waterproof", "Smart Assistant"]
  }
];

const ProductShowcase = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleAddToCart = (product: typeof products[0]) => {
    // GA4 Event: add_to_cart
    console.log("GA4 Event: add_to_cart", {
      currency: "USD",
      value: product.price,
      item_id: product.id,
      item_name: product.name,
      item_category: product.category,
      quantity: 1
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleQuickView = (product: typeof products[0]) => {
    // GA4 Event: view_item
    console.log("GA4 Event: view_item", {
      currency: "USD",
      value: product.price,
      item_id: product.id,
      item_name: product.name,
      item_category: product.category
    });
    
    toast({
      title: "Quick View",
      description: `Viewing details for ${product.name}`
    });
  };

  const handleToggleFavorite = (productId: string) => {
    const isCurrentlyFavorited = favorites.includes(productId);
    
    if (isCurrentlyFavorited) {
      setFavorites(favorites.filter(id => id !== productId));
      // GA4 Event: remove_from_wishlist
      console.log("GA4 Event: remove_from_wishlist", { item_id: productId });
    } else {
      setFavorites([...favorites, productId]);
      // GA4 Event: add_to_wishlist
      console.log("GA4 Event: add_to_wishlist", { item_id: productId });
    }
  };

  const handleCategoryFilter = (category: string) => {
    // GA4 Event: select_item
    console.log("GA4 Event: select_item", { 
      item_list_name: "Product Categories",
      item_category: category 
    });
  };

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium technology products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Laptops", "Phones", "Audio", "Tablets", "Wearables"].map((category) => (
            <Button
              key={category}
              variant="outline"
              onClick={() => handleCategoryFilter(category)}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-spring"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-strong transition-spring border-0 shadow-soft overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-spring"
                />
                
                {/* Badge */}
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
                
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm"
                    onClick={() => handleToggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm"
                    onClick={() => handleQuickView(product)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({Math.floor(Math.random() * 500) + 100} reviews)
                  </span>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                  {product.name}
                </h3>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full hover-glow transition-spring"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => console.log("GA4 Event: view_item_list - View All Products")}
            className="hover:bg-primary hover:text-primary-foreground transition-spring"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;